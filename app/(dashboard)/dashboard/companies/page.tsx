async function getClarityData() {
      const params = new URLSearchParams({
            numOfDays: "1",
            dimension1: "OS"
          });
          const headers = {
            Authorization: `Bearer ${process.env.CLARITY_TOKEN}`,
            "Content-Type": "application/json"
          };
  
          const response = await fetch(`https://www.clarity.ms/export-data/api/v1/project-live-insights?${params}`, {
            method: 'GET',
            headers: headers
          });

      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      return response.json()
}

export default async function Analytics() {
    const data = await getClarityData()
   
    
    return (
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">

          </main>
    )
  }