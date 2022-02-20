import axios from "axios";

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://raw.githubusercontent.com/akshita151199/APIs/main/data"
  );

  return {
    props: { items: data },
  };
};

function Users({ items }) {
  return <div>{
      items.data.map((item)=>{
          return(
            <div key={Math.random()} className="white">
              <span>{item.asset}</span>
              <span>{item.amount}</span>
            </div>
          )
      })
  }</div>;
}

export default Users;
