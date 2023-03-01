// SETS

const orderSets = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(orderSets);

console.log(new Set("Jonas"));
console.log(new Set(""));

console.log(orderSets.size);

console.log(orderSets.has("Bread"));
console.log(orderSets.has("Pizza"));

orderSets.add("Garlic Bread");
orderSets.add("Garlic Bread");
orderSets.delete("Risotto");
//orderSets.clear();

console.log(orderSets);

for (const order of orderSets) {
  console.log(order);
}

// Example

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"]).size
);

console.log(new Set("jonasschmedtmann").size);

// -----------END-------------
