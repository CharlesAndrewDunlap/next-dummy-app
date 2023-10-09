// import CatPage from './page1';
import { Card } from './components/Card'
import { Create } from './components/Create'



export default async function Home() {
  const userData = await fetch('https://random-data-api.com/api/v2/users', {
    cache: 'no-store',
  });
  const parsedData = await userData.json();

  const randomUser = await fetch('https://randomuser.me/api/', {
    cache: 'no-store',
  });
  const randomUserData = await randomUser.json();


  const comments = await fetch('http://localhost:3000/api/comment', { cache: 'no-store' });
  const data = await comments.json();

  

  return (
    <div className="content">
      <div className="create-form">
        <Create />
      </div>
      <div className="cards">
        {data?.map((comment: any) => {
          return <Card key={comment._id} comment={comment.comment} />
        })}
      </div>
      <div>{parsedData.first_name}</div>
      <div>{randomUserData.results[0].gender}</div>
      {/* <CatPage/> */}
    </div>
    
  )

}

