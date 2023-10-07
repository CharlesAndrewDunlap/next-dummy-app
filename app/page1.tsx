import Page2 from "./page2";

export default async function CatPage() {

  const userData = await fetch('https://cat-fact.herokuapp.com/facts', {
    cache: 'no-store',
  });
  const parsedData = await userData.json();

  

  return (
    <div className="content">
      <div>{parsedData[0].text}</div>
      <Page2/>
    </div>
  );
}


