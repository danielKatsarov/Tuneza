export default function Shop({ searchQuery }) {
  return (
    <section className="wrap section simple-page">
      <span className="eyebrow eyebrow-dark">TUNEZA SHOP</span>
      <h1>Our shop</h1>
      <p>Find your desired instrument.</p>
      {searchQuery.trim() && <p>Search: <strong>{searchQuery}</strong></p>}

    </section>
  );
}
