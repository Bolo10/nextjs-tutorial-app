'use client';
import { useParams } from 'next/navigation';

function UserPage() {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <button
        onClick={() => {
          console.log('works');
        }}></button>
    </div>
  );
}

export default UserPage;
