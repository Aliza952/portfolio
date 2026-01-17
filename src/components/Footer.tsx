import { Shield, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            <span className="font-mono text-sm text-muted-foreground">
              Aliza.dev
            </span>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Designed & Built with{" "}
            <Heart className="w-4 h-4 text-destructive fill-destructive" /> by
            Aliza Shaikh
          </p>

          <p className="text-sm text-muted-foreground font-mono">
            © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
