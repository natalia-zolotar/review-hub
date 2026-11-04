"use client"
import { useState } from "react"
import { useReviews } from "@/app/context/reviews.context"
import "@/app/styles/modal.scss"

export default function Modal({ closeModal }) {
  const { addReview } = useReviews()

  const [name, setName] = useState("")
  const [review, setReview] = useState("")
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [errors, setErrors] = useState({})

  const saveData = async() => {
    const newErrors = {}

    const trimmedName = name.trim()

    if (!trimmedName) {
      newErrors.name = 'Please enter your name'
    } else if (trimmedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (rating === 0) newErrors.rating = 'Please select a rating'

    setErrors(newErrors)

    if (Object.keys(newErrors).length) return

    const date = new Date()
    const id = date.getTime().toString()
    const formattedDate = date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })

    const data = {
      id,
      name: trimmedName,
      review,
      rating,
      time: formattedDate
    }

    addReview(data)
    
    closeModal()
  }

  return (
    <div className="overlay" onClick={closeModal}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Leave a Review</h2>

        <input
          type="text"
          placeholder="Your name *"
          className={`input ${errors.name ? 'input-error' : ''}`}
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setErrors((prev) => ({ ...prev, name: '' }))
          }}
        />

        {errors.name && <p className="error">{errors.name}</p>}

        <div
          className="rating"
          role="radiogroup"
          aria-label="Rating"
          onMouseLeave={() => setHoverRating(0)}
        >
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              key={value}
              type="button"
              role="radio"
              aria-checked={rating === value}
              className="heart"
              onClick={() => {
                setRating(value)
                setErrors((prev) => ({ ...prev, rating: '' }))
              }}
              onMouseEnter={() => setHoverRating(value)}
            >
              {value <= (hoverRating || rating) ? '💗' : '🤍'}
            </button>
          ))}
        </div>

        {errors.rating && <p className="error">{errors.rating}</p>}

        <textarea
          rows="5"
          placeholder="Write your review..."
          className="textarea"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <div className="actions">
          <button onClick={saveData} className="save">
            Save
          </button>

          <button onClick={closeModal} className="cancel">
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}