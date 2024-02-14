

const fetchTwitterHandles = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching Twitter handles:", error);
    return [];
  }
};

export default fetchTwitterHandles;
