export const getRecentPost = async () => {
  const fetchOption = {
    next: {
      tags: ["posts"],
    },
  };
  const res = await fetch(
    "http://localhost:5000/api/v1/items?sortBy=-createdAt&limit=3",
    fetchOption
  );
  return res.json();
};
