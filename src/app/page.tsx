import { ThemeProvider } from "@/components/theme-provider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputNameForm } from "@/components/input-form-front-page";

export default function Page() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Card>
        <CardHeader>
          <CardTitle>Entrez un prénom et un nom</CardTitle>
        </CardHeader>
        <CardContent>
          <InputNameForm />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
