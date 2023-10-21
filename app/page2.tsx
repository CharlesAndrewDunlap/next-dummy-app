export default async function Page2() {
  const userData = await fetch('https://google.com/404', {
    cache: 'no-store',
  });


  console.log('hello from page2 tsx');
  return (
    <div className="content">
      <div>Page2</div>
    </div>
  );
}
