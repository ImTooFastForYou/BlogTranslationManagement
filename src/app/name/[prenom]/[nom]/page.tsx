export default async function Page(props: {
  params: Promise<{ prenom: string; nom: string }>;
}) {
  const params = await props.params;
  console.log(params);
  return <div className=""> Bonsoir ! </div>;
}
