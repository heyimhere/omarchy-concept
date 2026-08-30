import { ModeExperience } from "./components/ModeExperience";
import { isExperienceMode } from "./lib/experience-mode";

export default async function Home(props: PageProps<"/">) {
  const query = await props.searchParams;
  const initialMode = isExperienceMode(query.mode) ? query.mode : "malleable";

  return <ModeExperience initialMode={initialMode} />;
}
