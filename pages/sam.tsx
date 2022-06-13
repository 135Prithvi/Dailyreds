import HomePage, { GradientBackground }  from "../components/Hompage";

export default function sam() {


    return (
        <div>
            <HomePage>
                Hi am Iron Man
                <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
            </HomePage>
        </div>
);
}