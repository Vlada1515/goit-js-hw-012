import axios from 'axios';

const API_KEY = '43019622-51d65222f4845ee303d6eaf7d';
const baseURL = 'https://pixabay.com/api/';

export async function fetchImages(searchQuery) {
 try {
    const response = await axios.get(baseURL, {
      params: {
        key: API_KEY,
        q: searchQuery,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: "page",
        per_page: "perPage",
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}