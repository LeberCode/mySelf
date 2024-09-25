import { Star, StarBorder } from "@mui/icons-material";

const style = "flex basis-1/4 text-signal";

export const getStars = (value: number) => {
  switch (value) {
    case 0:
      return (
        <div className={style}>
          <StarBorder />
          <StarBorder />
          <StarBorder />
          <StarBorder />
          <StarBorder />
        </div>
      );
    case 1:
      return (
        <div className={style}>
          <Star />
          <StarBorder />
          <StarBorder />
          <StarBorder />
          <StarBorder />
        </div>
      );
    case 2:
      return (
        <div className={style}>
          <Star />
          <Star />
          <StarBorder />
          <StarBorder />
          <StarBorder />
        </div>
      );
    case 3:
      return (
        <div className={style}>
          <Star />
          <Star />
          <Star />
          <StarBorder />
          <StarBorder />
        </div>
      );
    case 4:
      return (
        <div className={style}>
          <Star />
          <Star />
          <Star />
          <Star />
          <StarBorder />
        </div>
      );
    case 5:
      return (
        <div className={style}>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </div>
      );
  }
};
