export const generatePrompt = (query) => `
You are a product recommendation AI.

User asks: "${query}"

Return exactly 4 products in JSON format:
[
  {
    "name": "",
    "category": "",
    "description": "",
    "rating": ""
  }
]

Rating must be 1-5 integer.
Descriptions must be short and helpful.
`;
