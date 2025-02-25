import "../styles/reviwList.css";

function ReviewList({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p>Nessuna recensione disponibile.</p>;
  }

  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <div key={review.id || index} className="review-item">
          <div className="review-header">
            <span className="review-author">{review.author || "Anonimo"}</span>
            <span className="review-rating">
              {review.rating ? `${review.rating} / 5` : "Nessun voto"}
            </span>
          </div>
          <p className="review-content">{review.content}</p>
          {review.date && (
            <p className="review-date">
              {new Date(review.date).toLocaleDateString()}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
