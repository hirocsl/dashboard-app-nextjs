export default async function Page() {
  {
    console.log("Fetching customeresses data...");
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return <p>Customers Page</p>;
}
