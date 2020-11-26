import axios from 'axios';
import ApiKeys from '../ApiKeys';

const baseUrl = ApiKeys.databaseURL;

const patchFBTeamkeys = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/team.json`).then((response) => {
    const keys = Object.keys(response.data);
    keys.forEach((key) => {
      axios.patch(`${baseUrl}/team/${key}.json`, { firebaseKey: key });
    });
  }).catch((error) => reject(error));
});

export default patchFBTeamkeys;
