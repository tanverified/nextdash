import classes from "../styles/Table.module.css";
import Image from "next/image";
import { RiShareBoxLine } from "react-icons/ri";

function TabOneTable({ items }) {
  return (
    <div className={classes.container}>
      <ul className={classes.header}>
        <li>Assset</li>
        <li>Amount</li>
        <li>User Account</li>
        <li>Referral Earning</li>
      </ul>
      <div className={classes.body}>
        {items.data.slice(0, 1).map((item) => {
          const src = item.img;
          const chain_src = item.chain.img;

          console.log(item.img);
          return (
            <div className={classes.item} key={Math.random()}>
              <span className={classes.asset}>
                <Image
                  loader={() => src}
                  src={src}
                  alt="asset picture"
                  width={27.82}
                  height={27.24}
                />
                <div>
                  <p className={classes.assetName}>{item.asset}</p>
                  <p className={classes.chain}>
                    <p>Put</p>
                    <span>
                      <Image
                        loader={() => chain_src}
                        src={chain_src}
                        alt="chain picture"
                        width={9.11}
                        height={9.11}
                      />
                      <p>{item.chain.name}</p>
                    </span>
                  </p>
                </div>
              </span>
              <span>
                {item.amount}
                <p className={classes.state}>{item.state}</p>
              </span>
              <span>
                {item.user.slice(0, 5)}..
                {item.user.substring(item.user.length, item.user.length - 7)}
              </span>
              <span>
                {item.referral_earnings}
                <p className={classes.state}>
                  View On BSC Scan <RiShareBoxLine />
                </p>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TabOneTable;
