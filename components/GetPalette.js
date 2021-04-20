export default function getPalette(url) {
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
      {name: "hi", color: "#777777"},
      {name: "hi", color: "#6A6A6A"},
      {name: "hi", color: "#5D5D5D"},
      {name: "hi", color: "#515151"},
      {name: "hi", color: "#444444"},
      {name: "hi", color: "#373737"},
      {name: "Sky Blue", color: "#2B2B2B"},
      {name: "Cool Ice", color: "#1E1E1E"},
      {name: "hi", color: "#111111"},
    ];
  } else if (path === "grey") {
    return [
      {name: "hi", color: "#E9E9E9"},
      {name: "hi", color: "#DCDCDC"},
      {name: "hi", color: "#D0D0D0"},
      {name: "hi", color: "#C3C3C3"},
      {name: "hi", color: "#B6B6B6"},
      {name: "hi", color: "#AAAAAA"},
      {name: "Sky Blue", color: "#9D9D9D"},
      {name: "Cool Ice", color: "#909090"},
      {name: "hi", color: "#838383"},
    ];
  } else if (url === "purple") {
    return [
      {name: "hi", color: "#AEA3E9"},
      {name: "hi", color: "#9C8EE5"},
      {name: "hi", color: "#8A7AE0"},
      {name: "hi", color: "#7865DB"},
      {name: "hi", color: "#6650D6"},
      {name: "hi", color: "#534CD1"},
      {name: "Sky Blue", color: "#462EC5"},
      {name: "Cool Ice", color: "#3F29B0"},
      {name: "hi", color: "#37249C"},
    ];
  } else if (url === "pink") {
    return [
      {name: "Sky Blue", color: "#FF91B5"},
      {name: "Cool Ice", color: "#FF78A4"},
      {name: "hi", color: "#FF5E93"},
      {name: "hi", color: "#FF4582"},
      {name: "hi", color: "#FF5FBC"},
      {name: "hi", color: "#FF45B1"},
      {name: "hi", color: "#FF2CA6"},
      {name: "hi", color: "#FF129C"},
      {name: "hi", color: "#F80090"},
    ];
  } else if (url === "yellow") {
    return [
      {name: "hi", color: "#FFF04D"},
      {name: "hi", color: "#FFEA00"},
      {name: "hi", color: "#E6D300"},
      {name: "hi", color: "#CCBB00"},
      {name: "hi", color: "#FF974D"},
      {name: "hi", color: "#FF8933"},
      {name: "Sky Blue", color: "#FF7A1A"},
      {name: "Cool Ice", color: "#FF6B00"},
      {name: "hi", color: "#E66000"},
    ];
  } else {
    return "404";
  }
}
