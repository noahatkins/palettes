export default function getPalette(url: string) {
  var path = "";
  if (url) path = url.toLowerCase();
  if (path === "blue") {
    return [
      {name: "Pool Day", color: "#6AC5FE"},
      {name: "Cloud Blue", color: "#51BBFE"},
      {name: "Cool Ice", color: "#34B1FE"},
      {name: "Mexican Blue", color: "#0BA1FE"},
      {name: "Great Lakes", color: "#0171B7"},
      {name: "Thunderstorm", color: "#01588E"},
      {name: "Dark Denim", color: "#01263D"},
      {name: "Moonlit Sky", color: "#001B29"},
      {name: "Nightfall", color: "#000A10"},
    ];
  } else if (path === "red") {
    return [
      {name: "Spicy Watermelon", color: "#E55454"},
      {name: "Ferrari Red", color: "#E13E3E"},
      {name: "Teacher's Apple", color: "#DE2828"},
      {name: "Rikki Red", color: "#CD1F1F"},
      {name: "Cartoon Fire", color: "#B71C1C"},
      {name: "Red Pumpkin", color: "#A11919"},
      {name: "Stiletto", color: "#8B1616"},
      {name: "Frosted Cranberry", color: "#751212"},
      {name: "Toasted Red", color: "#5F0F0F"},
    ];
  } else if (path === "green") {
    return [
      {name: "Pale Mint", color: "#8DF082"},
      {name: "Ripe Honeydew", color: "#78ED6B"},
      {name: "Serenity", color: "#63EB54"},
      {name: "Sour Apple", color: "#4FE83E"},
      {name: "Emerald", color: "#3AE527"},
      {name: "Dad's Lawn", color: "#2DD91A"},
      {name: "Put-Put Green", color: "#28C217"},
      {name: "Hole 18", color: "#23AB14"},
      {name: "Evergreen", color: "#1F9412"},
    ];
  } else if (path === "black") {
    return [
      {name: "Cloudy Day", color: "#777777"},
      {name: "Corrupt Silver", color: "#6A6A6A"},
      {name: "Smooth Grey", color: "#5D5D5D"},
      {name: "Exhaust", color: "#515151"},
      {name: "Sunset Shadow", color: "#444444"},
      {name: "Thick Smoke", color: "#373737"},
      {name: "Slate Grey", color: "#2B2B2B"},
      {name: "Charred Coal", color: "#1E1E1E"},
      {name: "Bland Obsidian", color: "#111111"},
    ];
  } else if (path === "grey") {
    return [
      {name: "Dim Snow", color: "#E9E9E9"},
      {name: "Floral Grey", color: "#DCDCDC"},
      {name: "Light Fog", color: "#D0D0D0"},
      {name: "Archaic Bone", color: "#C3C3C3"},
      {name: "Cement", color: "#B6B6B6"},
      {name: "Cool Grey", color: "#AAAAAA"},
      {name: "Nickel", color: "#9D9D9D"},
      {name: "Ash", color: "#909090"},
      {name: "Storms End", color: "#838383"},
    ];
  } else if (url === "purple") {
    return [
      {name: "Tulips", color: "#AEA3E9"},
      {name: "Grape Soda", color: "#9C8EE5"},
      {name: "Purple Cloud", color: "#8A7AE0"},
      {name: "Unicorn", color: "#7865DB"},
      {name: "Magic", color: "#6650D6"},
      {name: "Calm Violet", color: "#534CD1"},
      {name: "Lavender Fields", color: "#462EC5"},
      {name: "Berry Smoothie", color: "#3F29B0"},
      {name: "Black Eye", color: "#37249C"},
    ];
  } else if (url === "pink") {
    return [
      {name: "Porky Pig", color: "#FF91B5"},
      {name: "Cherry Blossom", color: "#FF78A4"},
      {name: "Cotton Candy", color: "#FF5E93"},
      {name: "Orchid", color: "#FF4582"},
      {name: "Fairy Tale", color: "#FF5FBC"},
      {name: "Charming", color: "#FF45B1"},
      {name: "Queen's Pink", color: "#FF2CA6"},
      {name: "Barbie Doll", color: "#FF129C"},
      {name: "Paradise", color: "#F80090"},
    ];
  } else if (url === "yellow") {
    return [
      {name: "Banana", color: "#FFF04D"},
      {name: "Sunny", color: "#FFEA00"},
      {name: "Gold Tint", color: "#E6D300"},
      {name: "Bronze", color: "#CCBB00"},
      {name: "Peachy", color: "#FF974D"},
      {name: "Creamsicle", color: "#FF8933"},
      {name: "Juicy Fruit", color: "#FF7A1A"},
      {name: "Energy", color: "#FF6B00"},
      {name: "Sunset", color: "#E66000"},
    ];
  } else {
    return "404";
  }
}
