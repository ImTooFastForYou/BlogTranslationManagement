import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InputForm } from "@/components/input-form-front-page";

export default function Page() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div style={{ textAlign: "right", marginTop: "1rem" }}>
        <ModeToggle />
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Entrez un prénom et un nom</CardTitle>
        </CardHeader>
        <CardContent>
          <InputForm />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
