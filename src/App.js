import axios from "axios";
import "./App.css";

const App = () => {
  const fireWebhooks = async () => {
    let config = {
      url:
        "https://services.favro.com/webhook/automation/54d6e99af4b691ae9a79f60a",
      method: "POST",
      headers: {
        "x-token": "82c65b563b8a9cfc1381feec",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, DELETE",
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
      },
    };
    // axios(config)
    //   .then((response) => { console.log(response)});

    const res = await axios(config);

    // const res = await axios.post(
    //   "https://services.favro.com/webhook/automation/54d6e99af4b691ae9a79f60a",
    //   {
    //     headers: {
    //       Authorization: "Bearer 82c65b563b8a9cfc1381feec",
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    // const res2 = axios({
    //   baseURL: "https://services.favro.com/webhook/automation/54d6e99af4b691ae9a79f60a",
    //   auth: { "x-token": "82c65b563b8a9cfc1381feec" },
    //   // params: { query: "donkey", page: "1", per_page: "1" },
    // })

    console.log("res", res);
  };

  return (
    <div className="App">
      <button onClick={fireWebhooks}>fire favro webhooks event</button>
    </div>
  );
};

export default App;
