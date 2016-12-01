{
  "$schema": "http://json-schema.org/draft-04/schema#",
  "id": "/",
  "type": "object",
  "properties": {
    "categories": {
      "id": "categories",
      "type": "array",
      "items": {
        "id": "category",
        "type": "object",
        "properties": {
          "id": {
            "id": "id",
            "type": "integer"
          },
          "name": {
            "id": "name",
            "type": "string"
          },
          "color": {
            "enum": [
              "silver",
              "gray",
              "white",
              "maroon",
              "red",
              "purple",
              "fuchsia",
              "green",
              "lime",
              "olive",
              "yellow",
              "navy",
              "blue",
              "teal",
              "aqua",
              "orange",
              "aliceblue",
              "antiquewhite",
              "aquamarine",
              "azure",
              "beige",
              "bisque",
              "blanchedalmond",
              "blueviolet",
              "brown",
              "burlywood",
              "cadetblue",
              "chartreuse",
              "chocolate",
              "coral",
              "cornflowerblue",
              "cornsilk",
              "crimson",
              "darkblue",
              "darkcyan",
              "darkgoldenrod",
              "darkgray",
              "darkgreen",
              "darkgrey",
              "darkkhaki",
              "darkmagenta",
              "darkolivegreen",
              "darkorange",
              "darkorchid",
              "darkred",
              "darksalmon",
              "darkseagreen",
              "darkslateblue",
              "darkslategray",
              "darkslategrey",
              "darkturquoise",
              "darkviolet",
              "deeppink",
              "deepskyblue",
              "dimgray",
              "dimgrey",
              "dodgerblue",
              "firebrick",
              "floralwhite",
              "forestgreen",
              "gainsboro",
              "ghostwhite",
              "gold",
              "goldenrod",
              "greenyellow",
              "grey",
              "honeydew",
              "hotpink",
              "indianred",
              "indigo",
              "ivory",
              "khaki",
              "lavender",
              "lavenderblush",
              "lawngreen",
              "lemonchiffon",
              "lightblue",
              "lightcoral",
              "lightcyan",
              "lightgoldenrodyellow",
              "lightgray",
              "lightgreen",
              "lightgrey",
              "lightpink",
              "lightsalmon",
              "lightseagreen",
              "lightskyblue",
              "lightslategray",
              "lightslategrey",
              "lightsteelblue",
              "lightyellow",
              "limegreen",
              "linen",
              "mediumaquamarine",
              "mediumblue",
              "mediumorchid",
              "mediumpurple",
              "mediumseagreen",
              "mediumslateblue",
              "mediumspringgreen",
              "mediumturquoise",
              "mediumvioletred",
              "midnightblue",
              "mintcream",
              "mistyrose",
              "moccasin",
              "navajowhite",
              "oldlace",
              "olivedrab",
              "orangered",
              "orchid",
              "palegoldenrod",
              "palegreen",
              "paleturquoise",
              "palevioletred",
              "papayawhip",
              "peachpuff",
              "peru",
              "pink",
              "plum",
              "powderblue",
              "rosybrown",
              "royalblue",
              "saddlebrown",
              "salmon",
              "sandybrown",
              "seagreen",
              "seashell",
              "sienna",
              "skyblue",
              "slateblue",
              "slategray",
              "slategrey",
              "snow",
              "springgreen",
              "steelblue",
              "tan",
              "thistle",
              "tomato",
              "turquoise",
              "violet",
              "wheat",
              "whitesmoke",
              "yellowgreen",
              "rebeccapurple"
            ]
          }
        }
      }
    },
    "contacts": {
      "id": "contacts",
      "type": "array",
      "items": {
        "id": "contact",
        "type": "object",
        "properties": {
          "name": {
            "id": "name",
            "type": "string"
          },
          "company": {
            "id": "company",
            "type": "string"
          },
          "addresses": {
            "id": "addresses",
            "type": "array",
            "items": {
              "id": "address",
              "type": "string"
            }
          },
          "phones": {
            "id": "phones",
            "type": "array",
            "items": {
              "id": "phone",
              "type": "string"
            }
          },
          "emails": {
            "id": "emails",
            "type": "array",
            "items": {
              "id": "email",
              "type": "string"
            }
          },
          "dateOfBirth": {
            "id": "dateOfBirth",
            "type": "string"
          },
          "category": {
            "id": "category",
            "type": "integer"
          }
        }
      }
    }
  }
}
