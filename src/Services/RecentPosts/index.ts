export const getRecentPost=async()=>{
const res = await fetch('http://localhost:5000/api/v1/items?sortBy=-createdAt&limit=3')
return res.json()
}