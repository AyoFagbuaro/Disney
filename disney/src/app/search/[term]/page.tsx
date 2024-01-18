import { notFound } from "next/navigation";
import React from "react";
type Props = {
  params: {
    term: string;
  };
};

function SearchPage({ params: { term } }: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);

  // API call to get the searched movies
  // API call to get the popular movies
  return (
    <div>
      <div>Search Page : {termToUse}</div>
    </div>
  );
}

export default SearchPage;
