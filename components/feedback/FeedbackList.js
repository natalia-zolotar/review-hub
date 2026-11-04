"use client"
import { useState } from "react"
import { useReviews } from "@/app/context/reviews.context"
import "@/app/styles/feedback.scss"

export default function FeedbackList() {
  // Number of reviews shown initially and loaded per click
  const ITEMS_PER_PAGE = 3;
  const [visible, setVisible] = useState(ITEMS_PER_PAGE);
  const { allReviews } = useReviews()

  if (!allReviews.length) return <p>No reviews yet.</p>

  // Get only the reviews that should be displayed
  const visibleReviews = allReviews.slice(0, visible);
  // Check if there are more reviews available to show
  const hasMore = visible < allReviews.length;

  return (
    <>
      {visibleReviews.map((review) => (
        <article key={review.id} className="feedback">
          <div className="feedback__header">
            {review.name && <strong>{review.name}</strong>}
            {review.time && <span>{review.time}</span>}
          </div>

          {review.rating && (
            <div className="feedback__stars">
              {"💗".repeat(review.rating)}
            </div>
          )}

          {review.review && <p>{review.review}</p>}
        </article>
      ))}

      {hasMore && (
        <button
          className="loadmore"
          onClick={() => {
            setVisible((prev) => prev + ITEMS_PER_PAGE);
          }}
        >
          Load more reviews
        </button>
      )}
    </>
  )
}