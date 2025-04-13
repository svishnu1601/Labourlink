// Sample labor profile data
const laborProfiles = [
  {
    id: 1,
    name: "Ramesh Kumar",
    skills: ["Masonry", "Tiling", "Plastering"],
    experience: "8 years",
    location: "Jaipur",
    rate: "₹500/day",
    contact: "9876543210",
    rating: 4.5
  },
  {
    id: 2,
    name: "Suresh Patel",
    skills: ["Carpentry", "Furniture Making"],
    experience: "5 years",
    location: "Jodhpur",
    rate: "₹450/day",
    contact: "8765432109",
    rating: 4.2
  },
  {
    id: 3,
    name: "Vijay Sharma",
    skills: ["Plumbing", "Electrician"],
    experience: "10 years",
    location: "Udaipur",
    rate: "₹600/day",
    contact: "7654321098",
    rating: 4.8
  },
  {
    id: 4,
    name: "Anil Mehta",
    skills: ["Painting", "Wallpaper"],
    experience: "6 years",
    location: "Kota",
    rate: "₹400/day",
    contact: "6543210987",
    rating: 4.0
  },
  {
    id: 5,
    name: "Deepak Singh",
    skills: ["Welding", "Metal Work"],
    experience: "7 years",
    location: "jhunjhunu",
    rate: "₹550/day",
    contact: "9432109876",
    rating: 4.3
  }
];

function searchProfiles(searchInput) {
  // If input is empty, return all profiles
  if (!searchInput.trim()) return laborProfiles;

  const searchTerm = searchInput.toLowerCase();
  
  return laborProfiles.filter(profile => {
    // Always include location in search criteria
    return profile.name.toLowerCase().includes(searchTerm) || 
           profile.skills.some(skill => skill.toLowerCase().includes(searchTerm)) ||
           profile.location.toLowerCase().includes(searchTerm);
  });
}

// New function for location-specific searches
function searchByLocation(location) {
  return laborProfiles.filter(profile => 
    profile.location.toLowerCase().includes(location.toLowerCase())
  );
}
