import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const SEARCH_PATH = '/search'
const URL_SYNC_DELAY = 300

const percent = (value, total) => `${(value / total) * 100}%`

/**
 * Wraps a design and replaces its drawn search bar with a real control, sized
 * against the design's viewBox so it lines up with the artwork at any width.
 *
 * `live` filters as the visitor types and mirrors the query into the URL.
 * `submit` keeps the query local and opens the search page on Enter or on the
 * drawn button, which is how the landing page hands off to search.
 */
export default function SearchShell({
  children,
  viewBox,
  bar,
  textInset,
  placeholder,
  initialQuery = '',
  initialCategory,
  categorySelect,
  autoFocus = false,
  mode = 'live',
  submitButton,
}) {
  const navigate = useNavigate()
  const [query, setQuery] = useState(initialQuery)
  const [category, setCategory] = useState(initialCategory ?? categorySelect?.options[0] ?? '')
  const hasTyped = useRef(false)

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  // Mirror what the visitor types into the URL so the search stays shareable.
  // replaceState keeps these updates out of the history stack, so Back still
  // leaves the search page instead of stepping through every keystroke.
  useEffect(() => {
    if (mode !== 'live' || !hasTyped.current) return
    const timer = setTimeout(() => {
      const params = new URLSearchParams()
      const trimmed = query.trim()
      if (trimmed) params.set('q', trimmed)
      if (category) params.set('category', category)
      navigate(params.size > 0 ? `${SEARCH_PATH}?${params}` : SEARCH_PATH, { replace: true })
    }, URL_SYNC_DELAY)
    return () => clearTimeout(timer)
  }, [query, category, mode, navigate])

  const submit = () => {
    const params = new URLSearchParams()
    const trimmed = query.trim()
    if (trimmed) params.set('q', trimmed)
    if (category) params.set('category', category)
    navigate(params.size > 0 ? `${SEARCH_PATH}?${params}` : SEARCH_PATH)
  }

  const controls = [bar, categorySelect?.rect, submitButton].filter(Boolean)
  const left = Math.min(...controls.map((rect) => rect.x))
  const top = Math.min(...controls.map((rect) => rect.y))
  const width = Math.max(...controls.map((rect) => rect.x + rect.width)) - left
  const height = Math.max(...controls.map((rect) => rect.y + rect.height)) - top

  // The controls span the bounding box of every drawn element, sized against the
  // design's viewBox so they line up with the artwork at any rendered width.
  const controlsStyle = {
    left: percent(left, viewBox.width),
    top: percent(top, viewBox.height),
    width: percent(width, viewBox.width),
    height: percent(height, viewBox.height),
  }

  // Controls are positioned inside that box, so they are relative to its size.
  const place = (rect) => ({
    left: percent(rect.x - left, width),
    top: percent(rect.y - top, height),
    width: percent(rect.width, width),
    height: percent(rect.height, height),
  })

  return (
    <div
      className={[
        'relative w-full',
        query ? '[&_.search-drawn-placeholder]:hidden' : '',
        categorySelect ? '[&_.search-drawn-label]:hidden' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ containerType: 'inline-size' }}
    >
      {children}
      <div
        role="search"
        className="absolute"
        style={{ ...controlsStyle, fontSize: `${(16 / viewBox.width) * 100}cqw` }}
      >
        <input
          type="search"
          value={query}
          onChange={(event) => {
            hasTyped.current = true
            setQuery(event.target.value)
          }}
          onKeyDown={(event) => {
            // Enter confirms a CJK composition, so only submit once it has ended.
            if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) {
              submit()
            }
          }}
          aria-label={placeholder}
          autoComplete="off"
          autoFocus={autoFocus}
          className="absolute border-0 bg-transparent p-0 text-[#242528] outline-none [&::-webkit-search-cancel-button]:appearance-none"
          style={{ ...place(bar), paddingLeft: percent(textInset, width) }}
        />
        {categorySelect ? (
          <select
            value={category}
            onChange={(event) => {
              hasTyped.current = true
              setCategory(event.target.value)
            }}
            aria-label="Category"
            className="absolute cursor-pointer appearance-none border-0 bg-transparent p-0 text-[#242528] outline-none"
            style={{ ...place(categorySelect.rect), paddingLeft: percent(categorySelect.textInset, width) }}
          >
            {categorySelect.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : null}
        {submitButton ? (
          <button
            type="button"
            onClick={submit}
            aria-label="Search"
            className="absolute cursor-pointer rounded-full"
            style={place(submitButton)}
          />
        ) : null}
      </div>
    </div>
  )
}
