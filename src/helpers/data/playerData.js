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

const createPlayer = (object) => new Promise((resolve, reject) => {
  axios.post(`${baseUrl}/team.json`, object)
    .then((response) => {
      axios.patch(`${baseUrl}/team/${response.data.name}.json`, { firebaseKey: response.data.name }).then(resolve);
    }).catch((error) => reject(error));
});

const updatePlayer = (object) => new Promise((resolve, reject) => {
  axios.patch(`${baseUrl}/team/${object.firebaseKey}.json`, object)
    .then(resolve).catch((error) => reject(error));
});

const deletePlayer = (playerFirebaseKey) => axios.delete(`${baseUrl}/team/${playerFirebaseKey}.json`);

export {
  getPlayers,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
