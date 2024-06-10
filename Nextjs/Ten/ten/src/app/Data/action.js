'use server';

export async function handleFormSubmit(formData) {
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
  };
  
  // Simulate an asynchronous operation like a database save
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Return a message
  return { message: `Form submitted successfully for ${data.name}` };
}
