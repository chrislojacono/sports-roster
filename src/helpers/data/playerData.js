import axios from 'axios';
import ApiKeys from '../ApiKeys';

const baseUrl = ApiKeys.databaseURL;

const getPlayers = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/team.json`)
    .then((response) => {
      const team = response.data;
      const playerArray = [];
      if (team) {
        Object.keys(team).forEach((boardId) => {
          playerArray.push(team[boardId]);
        });
      }
      resolve(playerArray);
    })
    .catch((error) => reject(error));
});

export default getPlayers;
