// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=Lagos&appid=f08d744b96e47073e8e79c56047da620`
    )
        .then((res) => res.json())
        .then((data) => res.status(200).json(data));
}
