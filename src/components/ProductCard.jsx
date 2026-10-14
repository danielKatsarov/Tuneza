import Icon from './Icon';

export default function ProductCard({ product, isUsed, liked, onLike, onAdd }) {
  const tints = ['#FFE3C2', '#FFD6EC', '#EBD3F5', '#FFE9D0'];
  return (
    <article className="card">
      <div className="card-img" style={{ background: tints[product.tint] }}>
        <span className={`badge ${isUsed ? 'used' : ''}`}>{product.badge}</span>
        <button
          className={`heart ${liked ? 'on' : ''}`}
          aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
          aria-pressed={liked}
          onClick={onLike}
        >
          {liked ? '♥' : '♡'}
        </button>
        <Icon name={product.kind} size={96} />
      </div>
      <div className="card-body">
        <span className="card-meta">{product.meta}</span>
        <h3 className="card-name">{product.name}</h3>
        <div className="card-foot">
          <span className="price">{product.price}</span>
          <button className={`btn ${isUsed ? 'btn-dark' : 'btn-magenta'}`} onClick={onAdd}>
            {isUsed ? 'Contact seller' : 'Add to cart'}
          </button>
        </div>
      </div>
    </article>
  );
}