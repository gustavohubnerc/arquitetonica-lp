"use client";

export function Footer() {
  return (
    <div className="mt-2 bg-blue-gray-800 px-8 pt-6">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <h6 className="!text-white">
              Arquitetônica - Todos os direitos reservados.
            </h6>
          </div>
          
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <h6 className="!text-white">
            © 2024 Arquitetônica.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
