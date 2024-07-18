import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

interface Company {
  name: string;
  logo: string;
  numberOfOpenJobs: number;
  industry: string;
}

const companies: Company[] = [
  {
    name: "Company A",
    logo: "/companies/dialog.png",
    numberOfOpenJobs: 10,
    industry: "Technology"
  },
  {
    name: "Company B",
    logo: "/companies/dialog.png",
    numberOfOpenJobs: 5,
    industry: "Finance"
  },
  {
    name: "Company C",
    logo: "/companies/dialog.png",
    numberOfOpenJobs: 8,
    industry: "Healthcare"
  }
];

export default async function Companies() {
  const data = await getClarityData()
 
  
  return (
    <section className="min-h-screen relative py-24 w-full mx-auto">
      <div className="relative z-10 px-8">
        <div className="text-center">
          <h1 className="heading text-color">Top Companies</h1>
          <p className="subheading text-color-muted">Discover top companies offering job in different industries</p>
        </div>
      </div>
      <div className="hidden sm:flex mt-12 relative z-10 px-8 mx-auto max-w-5xl w-fit space-x-5 items-center justify-center flex-wrap">
      {companies.map((company, index) => (
            <Badge key={index} variant="outline" className="py-1 text-sm font-medium text-color">{company.industry}</Badge>
      ))}
      </div>
      <div className="px-8 pt-16">
        <ul role="list" className="relative z-10 mx-auto max-w-6xl border-  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px">
        {companies.map((company, index) => (
              <Link href="#" key={index} className="group relative flex flex-col px-8 py-8">
                  <div className="flex items-center space-x-3.5">
                    <div className="border rounded-full">
                      <Image src={company.logo} alt={company.name} className="h-6 w-6 rounded-full" loading="lazy" width="30" height="30" decoding="async"  />
                    </div>
                    <h2 className="text-base font-medium">{company.name}</h2>
                  </div>
                  <p className="flex-1 mt-4 mb-1 text-sm leading-loose ">{company.numberOfOpenJobs} Open Jobs</p>
                  <span className="flex items-center space-x-1 mt-3 rounded-full dark:hover:bg-transparent font-medium w-fit py-1 text-sm">View Profile <ChevronRight className="ml-1 w-4 h-4"/></span>
              </Link>
      ))}
        </ul>
      </div>
    </section>
  )
}