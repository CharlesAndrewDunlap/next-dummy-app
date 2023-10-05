// export default async function CatPage() {

//   const userData = await fetch('https://cat-fact.herokuapp.com/facts', {
//     cache: 'no-store',
//   });
//   const parsedData = await userData.json();

  

//   return (
//     <div className="content">
//       <div>{parsedData[0].text}</div>
//     </div>
//   );
// }



export default async function CatPage() {

  const userData = await fetch('https://example.com/non-existent-page', {
    cache: 'no-store',
  });
;

  return (
    <div className="content">
    </div>
  );
}