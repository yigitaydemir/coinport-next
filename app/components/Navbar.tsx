import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="bg-red-500">
      <div className="bg-green-300 w-full max-w-screen-xl m-auto flex justify-between items-center p-4">
        <h1 className="flex-1">Coinport</h1>

        <ul className="flex-1 flex justify-center gap-2">
          <li>Home</li>
          <li>Coins</li>
          <li>Watchlist</li>
        </ul>

        <div className="flex-1 flex justify-end">
          <Button>User</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
