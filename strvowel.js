function vowel_Count(str)
{ 

  return str.replace(/[^aeiou]/g, "").length; 
}

console.log(vowel_Count("Tanishka"));
console.log(vowel_Count("tanya")); 

       