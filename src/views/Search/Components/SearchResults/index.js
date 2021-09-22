import SearchResultItem from "./SearchResultItems";

export default function SearchResult({ results, isSearching }) {
  return (
    <div style={{
      width: "100%",
      padding: "0rem 2rem 0 rem 2rem"
    }}>
      {!results?.lenght && isSearching && <p>No existen resultados</p>}
      {results?.map((value) =>
        <SearchResultItem key={value.id} {...value} />)}
    </div>
  );
}