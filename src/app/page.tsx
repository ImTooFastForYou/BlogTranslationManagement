import { ThemeProvider } from "@/components/theme-provider";
import { Card, CardContent } from "@/components/ui/card";
import { InputNameForm } from "@/components/input-form-front-page";

export default function Page() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Card>
        <CardContent>
          <InputNameForm />
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
