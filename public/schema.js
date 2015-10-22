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
            "enum": 
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
