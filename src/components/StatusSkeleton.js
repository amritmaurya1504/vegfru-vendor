import { Stack } from "@chakra-ui/layout";
import { Skeleton } from "@chakra-ui/skeleton";

const SkeletonLoader = () => {
  return (
    <Stack>
      <Skeleton height="20px" fadeDuration={4} />
      <Skeleton height="20px" fadeDuration={4} />
      <Skeleton height="20px" fadeDuration={4} />
      <Skeleton height="20px" fadeDuration={4} />
      <Skeleton height="20px" fadeDuration={4} />
    </Stack>
  );
};

export default SkeletonLoader;