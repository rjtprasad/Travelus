export const BudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    description: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    description: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    description: "Dont worry about cost",
    icon: "💸",
  },
];

export const TravelerOptions = [
  {
    id: 1,
    title: "Just Me",
    description: "A sole traveler in exploration",
    icon: "✈️",
    people: "1 People",
  },
  {
    id: 2,
    title: "A Couple",
    description: "Two traveler in tandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    description: "A group of fun loving adventure",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    description: "A bunch of thrill-seekes",
    icon: "⛵",
    people: "5 to 10 People",
  },
];

export const promptTemplate =
  "Generate Travel Plan for Location : {place}, for {days} Days for {peoples} with a {budget} budget, Give me a Hotels options list with hotel name, hotel address, hotel image url, price, geo coordinates, rating, descriptions and suggest itinerary with place name, place detials, place image url, geo coordinates, ticket price, rating, Time travel each of the location for {days} days with each day plan with best time to visit in JSON format.";
