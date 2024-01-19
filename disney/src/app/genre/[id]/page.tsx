type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function Genre({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <div>
      Welcome to the Genre Page with ID:{id} and name: {genre}
    </div>
  );
}

export default Genre;
