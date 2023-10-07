export default async function Page2() {

  const userData = await fetch('https://google.com/404', {
    cache: 'no-store',
  });

  

  return (
    <div className="content">
      <div>Page2</div>
    </div>
  );
}
