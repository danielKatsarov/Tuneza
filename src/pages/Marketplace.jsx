export default function Marketplace({ searchQuery }) {
  return (
    <section className="wrap section simple-page">
      <span className="eyebrow eyebrow-dark">TUNEZA MARKETPLACE</span>
      <h1>Find instruments straight from musicians</h1>
      <p>Here users can view and add listings of music instruments.</p>
      {searchQuery.trim() && <p>Search: <strong>{searchQuery}</strong></p>}
      
    </section>
  );
}
