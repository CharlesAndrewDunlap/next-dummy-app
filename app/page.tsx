// import CatPage from './page1';
import { Card } from './components/Card'
import { Create } from './components/Create'
import { useEffect } from 'react';



export default async function Home() {
  console.log('at the tippy top');
  const userData = await fetch('https://google.com/404', {
    cache: 'no-store',
  })

  const randomUser = await fetch('https://randomuser.me/api/', {
    cache: 'no-store',
  })
  const randomUserData = await randomUser.json();


  const comments = await fetch('http://localhost:3000/api/comment', { cache: 'no-store' })
  const data = await comments.json();
  console.log('here is the data: ', data);
  return (
    (<div className="content">
      <div className="create-form">
        <Create />
      </div>
      <div className="cards">
        {data?.map((comment: any) => {
          return <Card key={comment._id} comment={comment.comment} />
        })}
      </div>
      {/* <div>{parsedData.first_name}</div> */}
      <div>{randomUserData.results[0].gender}</div>
      {/* <CatPage/> */}
    </div>)
  );
}

