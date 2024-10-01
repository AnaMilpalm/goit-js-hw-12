import axios from "axios";
const API_KEY = '46203221-a91cc8cf493e831e00cc5b047';
const BASE_URL = 'https://pixabay.com/api/';
        
export const backendData = async (text, perPage, page) => {
  const options = new URLSearchParams({
      key: API_KEY,
      q: text,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      per_page: perPage,
      page: page,
  });
  return await axios.get(`${BASE_URL}?${options}`).then(response => response.data);
}
